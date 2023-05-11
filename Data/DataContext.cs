using SNBPSchool.Model;
using Microsoft.EntityFrameworkCore;

namespace SNBPSchool.Data
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Students> Students => Set<Students>();
        public DbSet<User> Users => Set<User>();

    }
}
    