import Router from 'koa-router';
import axios from './utils/axios'
import Province from '../dbs/models/province'

let router = new Router({ prefix: '/search' })

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city;
  let { status, data: { result } } = await axios.get('http://cp-tools.cn/search/hotPlace', {
    params: { city }
  });
  if (status === 200) {
    ctx.body = {
      result
    }
  } else {
    ctx.body = {
      result: []
    }
  }
});

router.get('/top', async (ctx) => {
  let { status, data: { top } } = await axios.get('http://cp-tools.cn/search/top', {
    params: {
      input: ctx.query.input,
      city: ctx.query.city
    }
  });
  ctx.body = {
    top: status === 200 ? top : []
  }
});

router.get('/resultsByKeywords', async (ctx) => {
  const { city, keyword } = ctx.query;
  let { status, data: { count, pois } } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword
    }
  });
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})

export default router;
