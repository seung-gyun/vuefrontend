<template>
    
    <div class="card shadow-sm">
        <img :src="item.IMGPATH"/>
        <div class="card-body">
            <p class = "card-text">{{item.NAME}}</p>
                <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-primary">구입하기</button>                
                <small class="price text-muted">
                    {{ item.PRICE }} 원
                </small>
                <small class="discount badge bg-danger">
                    {{ item.DISCOUNTPER }} %
                </small>
                <small class="discount text-danger">
                    {{ item.REALPRICE }} 원
                </small>
                </div>
        </div>
        </div>

</template>

<script>
export default {
    name : 'Card',
    props:{
        item: Object
    }
}
</script>

<style scoped>

img{
    width:100%;
    height:250px;
}

.card .card-body .price {
    text-decoration : line-through;
}

</style>