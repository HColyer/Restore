namespace API.Entities
{
    public class DeliveryAddress
    {
        public required string FullName { get; set; }
        public required string Address1 { get; set; }
        public string? Address2 { get; set; }
        public required string City { get; set; }
        public required string County { get; set; }
        public required string PostCode { get; set; }
    }
}