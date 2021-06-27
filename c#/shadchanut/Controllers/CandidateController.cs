using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;

namespace shadchanut.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    [RoutePrefix("api/Candidates")]
    public class CandidateController : ApiController
    {
        
        [HttpPost]
        [Route("addManCandidates")]
        public IHttpActionResult AddManCandidates(Dto.ManCandidateDto c)
        {
            int id= BL.CandidatesBL.AddManCandidates(c);

            //if (ca != null)
            //    return Ok(ca);
            return Ok(id);
        }
        
       [HttpPost]
        [Route("addWomanCandidates")]
        public IHttpActionResult AddWomanCandidates(WomanCandidateDto c)
        {
            int id = BL.CandidatesBL.AddWomanCandidates(c);
            //if (ca != null)
            //    return Ok(ca);
            return Ok(id);
        }




    }
}
