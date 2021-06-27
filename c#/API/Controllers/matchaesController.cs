using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;

namespace matchaes.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/matchaes")]
    public class listofmosdotController : ApiController
    {
        //[HttpGet]
        //[Route("mathescandidat")]
        //public IHttpActionResult FindAllMatchesForCandidate()
        //{
        //    //MatchPosibilityDto
        //    List<candidatesDto> matcheslist = BL.MatchingBL.FindAllMatchesForCandidate();
        //    if (matcheslist.Count() > 0)
        //        return Ok(matcheslist);
        //    return BadRequest();
        //}
    }
}
