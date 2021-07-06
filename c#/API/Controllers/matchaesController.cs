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
    public class matchaesController : ApiController
    {
        [HttpGet] //התאמות מערכת אוטומטיות
        [Route("findAllMatchesForCandidate")]
        public IHttpActionResult FindAllMatches()
        {
            //MatchPosibilityDto
            List<MatchPosibilityDto> matcheslist =new BL.MatchingBL().FindAllMatches();
            if (matcheslist.Count() > 0)
                return Ok(matcheslist);
            return BadRequest();
        }
        [HttpPost]
        [Route("Findmaches")]// סינון לפי מועמדי 
        public IHttpActionResult findMaches(MachestoOunCDto cc)
        {
            List<FullCandidateDto>[] candidetList =new BL.MatchingBL().findMaches(cc);
            if (candidetList.Count() > 0)
                return Ok(candidetList);
            return BadRequest();
        }

    }
}
