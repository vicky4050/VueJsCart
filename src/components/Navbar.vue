<template>
  <div class="hello">
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
     <div class="container">
        <router-link class="navbar-brand" to="/">Vue Shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#">Products</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#">About</router-link>
            </li>
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Start</a>
            
            
            <a class="btn  border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              
              <span class="fa-stack fa-2x has-badge" :data-count="cartCount">
                <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                <i style="" class="fa fa-shopping-cart fa-stack-2x red-cart"></i>
              </span>
            </a>
          </form>
        </div>
     </div>
</nav>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  computed:{
    cartCount: function() {        
      return this.$store.state.cart.length;
    }
  },
  components:{}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #fff !important;
    }

    $shopping-cart-red: rgb(93, 128, 113);

    .fa-stack[data-count]:after{
      position:absolute;
      right:0%;
      top:0%;
      content: attr(data-count);
      font-size:40%;
      padding:.6em;
      border-radius:999px;
      line-height:.75em;
      color: white;
      color:$shopping-cart-red;
      text-align:center;
      min-width:2em;
      font-weight:bold;
      background: white;
      border-style:solid;
    }
    .fa-circle {
      color:$shopping-cart-red;      
    }

    .red-cart {
      color:$shopping-cart-red; background:white;
    }
   }

</style>
