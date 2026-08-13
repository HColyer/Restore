namespace API.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public long Price { get; set; } 
        public int OrderId { get; set; }
        public required Order Order { get; set; }
        public int ProductId { get; set; }
        public required Product Product { get; set; }
    }
}