<template>
    <b-button type="button" class="btn btn-unique m-0 px-3 py-0" size="sm" :variant="this.liked ? 'outline-success' : 'outline-secondary'" @click="toggleLike">{{this.bufferdLikes}} Likes</b-button>
</template>

<script>
import EventServices from "@/services/EventServices";

export default {
    name: "Like",
    data(){
        return {liked: this.$parent.likes.includes(this.$store.state.userInfo._id), bufferdLikes: this.$parent.likes.length};
    },
    methods:{
        toggleLike(){
            if(this.liked == true) this.disLike();
            else this.addLike();
        },
        disLike(){
            EventServices.disLike(this.$store.state.token, this.$parent.id)
                .then((res)=>{
                    if(res.data.success == 'true') { 
                        this.liked = false; this.bufferdLikes--;
                    } else this.likeError(res.data.err);
                })
                .catch((e)=>this.likeError('Please Login first'));
        },
        addLike(){
            EventServices.addLike(this.$store.state.token, this.$parent.id)
                .then((res)=>{
                    if(res.data.success == 'true') { 
                        this.liked = true; this.bufferdLikes++;
                    } else this.likeError(res.data.err);
                })
                .catch((e)=>this.likeError('Please Login first'));
        },
        likeError(msg){this.$vToastify.error(msg)},
    },
}
</script>