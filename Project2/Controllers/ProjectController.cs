using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project2.Data;
using Project2.Models;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = project.Id }, project);
        }
    }
}