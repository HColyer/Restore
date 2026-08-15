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
        public async Task<ActionResult<PaginationDTO<Product>>> Get(
            int pageNumber = 1,
            int pageSize = 12,
            string? searchTerm = null,
            string? orderBy = "name",
            [FromQuery] string[]? brands = null,
            [FromQuery] string[]? types = null
        )
        {
            IQueryable<Product> query = context.Products;

            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p =>
                    p.Name.ToLower().Contains(searchTerm.ToLower()));
            }

            if (brands != null && brands.Length > 0)
            {
                query = query.Where(p => brands.Contains(p.Brand));
            }

            if (types != null && types.Length > 0)
            {
                query = query.Where(p => types.Contains(p.Type));
            }

            query = orderBy switch
            {
                "price-low" => query.OrderBy(p => p.Price),
                "price-high" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };

            // gets number of products matching (Search, Filter and Sort) 
            // so client knows how many pages to display
            int count = await query.CountAsync();
            // querys the db, gets products in increments of the page size
            // client will change page number 
            List<Product> products = await query
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize).ToListAsync();

            // returns the pagination infomation that client needs, data is the generic type
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

        [HttpGet("filters")]
        public async Task<ActionResult> GetFilters()
        {
            List<string> brands = await context.Products
            .Select(p => p.Brand)
            .Distinct()
            .ToListAsync();

            List<string> types = await context.Products
            .Select(p => p.Type)
            .Distinct()
            .ToListAsync();

            return Ok(new
            {
                Brands = brands,
                Types = types
            });
        }

    }
}
