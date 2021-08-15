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
    [RoutePrefix("api/ProposalInProcess")]
    public class ProposalInProcessController : ApiController
    {

            [HttpPost]
            [Route("Matchesinprocess")]
            public IHttpActionResult AddMatchesinprocess(Dto.ProposalInProcessDto cc)
            {
            bool success = BL.ProposalInProcessBL.AddMatchesinprocess(cc);
            return Ok(success);
        }
     
        
        [HttpGet] 
        [Route("ProposalInProceslist")]
        public IHttpActionResult getProposalInProceslist()
        {
            List<ProposalInProcessDto> ProposalInProceslist = BL.ProposalInProcessBL.getProposalInProceslist();
            if (ProposalInProceslist.Count() > 0)
                return Ok(ProposalInProceslist);
            return BadRequest();
        }

    }
}