<template>
<div class="News">
    <div class="card-header"> {{this.title}} </div>
    <div class="card-body">
        Content: {{this.content}}
        <blockquote class="blockquote mb-0">
            <footer class="blockquote-footer">
                Author: {{this.username}}, Message id: {{this.id}} at {{this.date}}
            </footer>
        </blockquote>
    </div>
</div>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
        id: this.$route.params.id,
        username: " user name from api ",
        title: ' title from api... ',
        date: 'aa-bb-cccc dd:ee',
        content: " to fetch message from api... ",
    };
  },
};
</script>
