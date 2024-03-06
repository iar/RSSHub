import utils from '../utils';
import { getSearch } from './twitter-api';
import { initToken } from './token';

export default async (ctx) => {
    const keyword = ctx.req.param('keyword');
    await initToken();
    const data = await getSearch(keyword);

    ctx.set('data', {
        title: `Twitter Keyword - ${keyword}`,
        link: `https://twitter.com/search?q=${encodeURIComponent(keyword)}`,
        item: utils.ProcessFeed(ctx, {
            data,
        }),
        allowEmpty: true,
    });
};
