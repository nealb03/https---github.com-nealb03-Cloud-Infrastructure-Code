using Project2.Models;
using System.Threading.Tasks;

namespace Project2.Services
{
    public class ProjectService
    {
        public ProjectService() { }

        public Task<Project> GetProjectAsync(int id)
        {
            // Example stub: Replace with actual DB logic
            return Task.FromResult(new Project
            {
                Id = id,
                Name = "Example Project",
                Description = "This is an example project."
            });
        }
    }
}