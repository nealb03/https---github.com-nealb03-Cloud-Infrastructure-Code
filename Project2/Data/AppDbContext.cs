using Microsoft.EntityFrameworkCore;
using Project2.Models;

namespace Project2.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; } = null!;

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}