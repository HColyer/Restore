using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    public static class BasketExtensions
    {
        public static BasketDTO ToDto(this Basket basket)
        {
            return new BasketDTO
            {
                BasketId = basket.BasketId,
                Items = basket.Items.Select(i => new BasketItemDTO
                {
                    ProductId = i.ProductId,
                    Name = i.Product.Name,
                    Price = i.Product.Price,
                    PictureUrl = i.Product.PictureUrl,
                    Quantity = i.Quantity,
                    Brand = i.Product.Brand,
                    Type = i.Product.Type
                }).ToList()
            };
        }
    }
}