using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace shadchanut.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    [RoutePrefix("api/WhatLooking")]
    public class WhatLookingController : ApiController
    {
        [HttpPost]
        [Route("addWomanWhatLooking")]
        public IHttpActionResult AddWomanWhatLooking([FromBody] WhatLookingWomanDto w)
        {
            bool success = BL.WhatLookingBL.AddWomanWhatLooking(w); ;
            return Ok(success);
        }

        [HttpPost]
        [Route("addManWhatLooking")]
        public IHttpActionResult AddManWhatLooking([FromBody] WhatLookingManDto w)
        {
            bool success = BL.WhatLookingBL.AddManWhatLooking(w);;
            return Ok(success);
        }


    }
}
