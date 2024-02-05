<template>
  <div v-if="showWarning" class="warning-message">
      Downloading QR Code!
  </div>
  <header>
    QR Code Generator
  </header>
  <div>
    <input type="text" v-model="inputText">
    <!--p>Input value: {{ inputText }}</p-->
  </div>
  <div>
    <button @click="getQRCode">
      Generate QR Code
    </button>
    <button @click="download">
      Download QR code
    </button>
  </div>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>

<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'https://github.com/AndySCS',
        size: 300,
        inputText: "",
        showWarning: false,
      }
    },
    components: {
      QrcodeVue,
    },
    methods:{
      // to input the input text for qrcode generation
      getQRCode(){
        this.value = this.inputText;
        //this.inputText = "";
      },
      download(){
        const QRCode = document.getElementById('app').getElementsByTagName('canvas');
        const a = document.createElement('a');
        a.href = QRCode[0].toDataURL('png');
        a.download = 'qr_code';
        a.click()
        this.showWarning = true;
        setTimeout(() => {
          this.showWarning = false;
        }, 5000);
      },
    }
  }
</script>

<style>
.warning-message {
  background-color: yellow;
  color: black;
  padding: 10px;
  border: 1px solid orange;
}
</style>