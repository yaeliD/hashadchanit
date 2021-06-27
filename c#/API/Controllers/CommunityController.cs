using System.Collections.Generic;
using System.Linq;
using Dto;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/community")]

    public class CommunityController : ApiController
    {
        [HttpGet]
        [Route("getAllEda")]
        public IHttpActionResult GetAllEda()
        {
            List<communityDto> communityList = BL.communityBl.GetAllEda();
            if (communityList.Count() > 0)
                return Ok(communityList);
            return BadRequest();
        }
  
    }

}