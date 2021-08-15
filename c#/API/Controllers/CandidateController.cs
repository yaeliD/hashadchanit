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
        public IHttpActionResult AddWomanCandidates([FromBody] WomanCandidateDto c)
        {
            int id = BL.CandidatesBL.AddWomanCandidates(c);
            //if (ca != null)
            //    return Ok(ca);
            return Ok(id);
        }

        [HttpGet]
        [Route("getAcandidtes/{id}")]// הצגת מועמד עי קוד מועמד 
        public IHttpActionResult GetAlcandidets(int id)
        {
            FullCandidateDto candidetList = BL.CandidatesBL.GetAlcandidets(id);
            if (candidetList  != null)
                return Ok(candidetList);
            return BadRequest();
        }
        [HttpPost]
        [Route("fiiltering")]// כללי לפי סינון הצגת  המועמדים 
        public IHttpActionResult Filteriing(SearchDto s)
        {
            List<candidatesDto> candidetList = BL.CandidatesBL.Filteriing(s);
            if (candidetList.Count() > 0)
                return Ok(candidetList);
            return Ok();
        }


    }
}
