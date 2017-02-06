<template lang="html">
  <div class="comments">
    影评信息
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:['movId'],
  computed: {},
  created() {
    this.getComments(this.movId);
  },
  attached() {},
  methods: {
    getComments(mvId){
        const apiUrl = 'https://api.douban.com/v2/movie/subject/'+mvId+'/comments';
        this.$http.jsonp(apiUrl).then(
                    function (res) {
                       console.log(res.body);
                        this.$data.movData = res.body;
                    },function (res) {
                    }
                );
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
