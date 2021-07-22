using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;

namespace API.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    [RoutePrefix("api/ProposalInProcess")]
    public class ProposalInProcessController : ApiController
    {

            [HttpPost]
            [Route("Matchesinprocess")]
            public IHttpActionResult AddManCandidates(Dto.ManCandidateDto c)
            {
                int id = BL.CandidatesBL.AddManCandidates(c);

                //if (ca != null)
                //    return Ok(ca);
                return Ok(id);
            }
        }
}