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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/occupationTyes")]

    public class occupationTypeController : ApiController
    {
        [HttpGet]
        [Route("getAoccuption")]
        public IHttpActionResult GetAoccuption()
        {
            List<Dto.OccupationTypeDto> OccupationTypeList = BL.occupationTypeBL.GetAoccuption();
            if (OccupationTypeList.Count() > 0)
                return Ok(OccupationTypeList);
            return BadRequest();
        }
    }
}
