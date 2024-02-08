
<template>
    <div class="grid grid-cols-6 gap-1">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <!-- <div v-if="images" class="grid" style="max-width: 800px"> -->
        <div v-for="(image, index) of images" :key="index">
            <img :src="image.thumbnailImageSrc" 
                    v-tooltip.top="image.title"
                    :alt="image.alt" 
                    style="cursor: pointer" 
                    @click="imageClick(index)" 
                    class=" h-30 w-32 border-2 border-red-500"/>
                    <!-- {{ image.title }} -->
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayCustom: false
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};
</script>
