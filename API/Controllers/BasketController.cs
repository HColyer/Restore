using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<BasketDTO>> GetBasket()
        {
            Basket? basket = await RetrieveBasket();
            if (basket == null) return NoContent();
            return basket.ToDto();
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            // get basket
            Basket? basket = await RetrieveBasket();
            // if no basket
            // create a new basket
            basket ??= CreateBasket();
            // get product
            Product? product = await context.Products.FindAsync(productId);
            if (product == null) return BadRequest("Problem adding item to basket");
            // add item to basket
            basket.AddItem(product, quantity);
            // save changes to db
            bool result = await context.SaveChangesAsync() > 0;

            if(result) return CreatedAtAction(nameof(GetBasket), basket.ToDto());
            return BadRequest("Failed to add item to basket");
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // get the basket
            Basket? basket = await RetrieveBasket();
            if (basket == null) return BadRequest("Basket not found");
            // remove the item 
            basket.RemoveItem(productId, quantity);
            // save the changes
            bool result = await context.SaveChangesAsync() > 0;
            if (!result) return BadRequest("Failed to remove item from basket");
            return Ok();
        }

        private async Task<Basket?> RetrieveBasket()
        {
            return await context.Baskets
            .Include(x => x.Items)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(b => b.BasketId == Request.Cookies["basketId"]);
        }

        private Basket CreateBasket()
        {
            string basketId = Guid.NewGuid().ToString();

            Basket basket = new()
            {
                BasketId = basketId
            };

            Response.Cookies.Append("basketId", basket.BasketId, new CookieOptions
            {
                IsEssential = true,
                HttpOnly = true,
                Expires = DateTimeOffset.UtcNow.AddDays(30)
            });

            context.Baskets.Add(basket);

            return basket;
        }

    }
}