using System.Collections.Generic;
using System.Linq;
using Dto;
using System.Web.Http;
using System.Web.Http.Cors;

namespace shadchanut.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/typsofsteps")]
    public class typsofstepsController : ApiController
    {
        [HttpGet]
        [Route("Typsofsteps/{mp}")]
        public IHttpActionResult Typsofstepsto(int mp)//מחזירה סוגי פגישות 
        {
            List<TypesOfStepDto> TypsofstepstoList = BL.ProposalInProcessBL.Typsofstepsto(mp);
            if (TypsofstepstoList.Count() > 0)
                return Ok(TypsofstepstoList);
            return BadRequest();
        }
    }
}

  
