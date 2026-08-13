using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<PaginationDTO<Product>>> Get(int pageNumber = 1, int pageSize = 12)
        {   
            IQueryable<Product> query = context.Products
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize);

            int count = await context.Products.CountAsync();
            List<Product> products = await query.ToListAsync();

            
            return new PaginationDTO<Product>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalCount = count,
                Data = products
            };
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            Product? product = await context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return product;
        }
    }
}
