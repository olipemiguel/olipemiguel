<template>
  <div class="AppMainTemplate Wallet">
    <h3 class="WalletTitle">Donate</h3>
    <div class="WalletBox">
        <div class="WalletBoxInfo">
            <i class="fa-brands fa-btc WalletBoxInfoIcon"></i>
            <p class="WalletBoxInfoDonate">1HTpL1DHqHUs6Au34DpGbKXCcTGaezj9PK</p>
        </div>
        <div class="WalletBoxInfo">
            <i class="fa-brands fa-ethereum WalletBoxInfoIcon"></i>
            <p class="WalletBoxInfoDonate">0x33d32dca198f622b82d266359b254012a66cab42</p>
        </div>
        <div class="WalletBoxInfo">
            <i class="fa-brands fa-monero WalletBoxInfoIcon"></i>
            <p class="WalletBoxInfoDonate">0xf621b66f50958082e5319ef793ac7fc5a033f998</p>
        </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/wallet.css";
export default {
    name: 'WalletView',
    components: {
    }
  
}
</script>