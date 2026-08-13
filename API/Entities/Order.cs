namespace API.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public required string CustomerEmail { get; set; }
        public DateTime OrderDate { get; set; }
        public required DeliveryAddress DeliveryAddress { get; set; }
        public List<OrderItem> OrderItems { get; set; } = [];
        public long Total { get; set; }
    }  
}