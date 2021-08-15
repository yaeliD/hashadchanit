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
    [RoutePrefix("api/StepsOfProposa")]
    public class StepsOfProposalController : ApiController
    {
        [HttpGet]
        [Route("GetmachDetails/{id}")]// הצגת פרטי פגישות  עי קוד הצעות בתהליך 
        public IHttpActionResult Getmachdetails(int id)
        {
           IEnumerable<StepsOfProposalDto> machdetails = BL.StepsOfProposaBl.Getmachdetails(id);
            if (machdetails != null)
                return Ok(machdetails);
            return BadRequest();
        }
        
            [HttpPost]
        [Route("AddStepsOfProposal")]
        public IHttpActionResult AddstepsOfProposal(StepsOfProposalDto m)
        {
            bool success = BL.StepsOfProposaBl.AddstepsOfProposal(m); ;
            return Ok(success);
        }
    }
}