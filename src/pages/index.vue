<template>
  <main>
    <section class="grs-message-box">
      このサイトは主にライブチャット歴10年近くになる管理人がおすすめする最高のライブチャットの楽しみ方を共有したり、ライブチャットで生計を立てている女の子達の配信を色んな方に勧めることを目的としています。<br>
      そのためにおすすめの女の子が管理人の好みによってしまうことをご了承くださいませ。<br>
      また、閲覧している方から応援してほしいという女の子がいればFC2LIVE以外でも教えて頂けたらサイト掲載を検討させていただきますので、お気軽にご連絡ください。
    </section>
    <NewArticles></NewArticles>
    <section class="section memo">
      https://qiita.com/Ancient_Scapes/items/fe18bae043e4d35f1e39<br />
      https://live.fc2.com/publicApiList/<br />
      https://live.fc2.com/adult/contents/allchannellist.php<br />
      <ul>
        <li>
          おすすめ配信一覧
          おすすめ配信通知(LINE通知)
          リアルタイム配信一覧
          配信者twitter
          配信者ブログ
          他ライブチャットとの比較
          失敗しない2ショットの楽しみ方
          Twitterを活用しよう
        </li>
        <li>
          https://uncle-javascript.com/weird-nuxt-3-axios-data-fetch
        </li>
        <li>
          https://qiita.com/nyatto/items/94c3f7cac14e8e8ef50f
        </li>
        <li>
          nuxt.config.js -> target is change[server], Insert ssr: true,
        </li>
        <li>
          layouts > default.bue -> canonical setting
        </li>
        <li>
          画層最適化モジュール：https://zenn.dev/kote2/articles/3fe4c7a8ad1797
        </li>
        <li>
          超重要:https://www.virment.com/how-to-create-computed-v-for/
        </li>
        <li>
          https://dev.to/tillsanders/deploy-nuxt-js-on-digitalocean-app-platform-in-5-minutes-or-less-2dij
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import NewArticles from '~/components/NewArticles'
export default {
  components: {
    NewArticles
  },
  fetch({ store }) {
    store.commit("resetMenu");
  }
};
</script>

<style lang="scss" scoped>
</style>
