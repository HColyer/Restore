namespace API.DTOs
{
    public class PaginationDTO<T>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 12;
        public int TotalCount { get; set; }
        public List<T> Data { get; set; } = new();
    }
}