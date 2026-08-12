namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public required string BasketId { get; set; }
        public List<BasketItem> Items { get; set; } = [];
        public void AddItem(Product product, int quantity)
        {
            if (product == null) ArgumentNullException.ThrowIfNull(product);
            if (quantity < 0) throw new ArgumentException("Quantity should more than zero", nameof(quantity));

            BasketItem? item = GetItem(product.Id);

            if (item is null)
            {
                BasketItem newItem = new()
                {
                    Product = product,
                    Quantity = quantity
                };
                Items.Add(newItem);
            }
            else
            {
                item.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity)
        {

            BasketItem? item = GetItem(productId);

            if (item is null)
            {
                throw new InvalidOperationException("Product can not be null");
            }
            if (quantity <= 0)
            {
                throw new InvalidOperationException("Quantity can not be a negative number");
            }

            item.Quantity -= quantity;

            if (item.Quantity <= 0)
            {
                Items.Remove(item);
            }
        }

        private BasketItem? GetItem(int productId)
        {
            return Items.FirstOrDefault(item => item.ProductId == productId);
        }
    }
}
