using Core.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Core.Logic;
namespace Core
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = @"Server=(localdb)\mssqllocaldb;Database=SimpleDB;Trusted_Connection=True;";
            services.AddDbContext<DataAccessContext>(options => options.UseSqlServer(connection));
            services.AddScoped<DataAccessContext>();
            var hosts = new string[] { "http://localhost:8080/","http://localhost:8080", "http://localhost:5000" };
            var methods = new string[] { "GET", "POST", "PUT", "DELETE", "PATCH" };
            services.AddScoped<ISieFileImportManager, SieFileImportManager>();
            services.AddScoped<IDataManager, DataManager>();

            // Add framework services.
            services.AddCors(options =>
                        {
                        options.AddPolicy("AllowSpecificOrigin",
                        builder => builder.WithOrigins(hosts).AllowAnyHeader().WithMethods(methods));
                        });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            
            app.UseCors("AllowSpecificOrigin");
            app.UseMvc();
            
        }
    }
}
