<template>
  <div id="app">
    <aside class="admin-sidebar">
    <div class="admin-sidebar-brand nav">
        <!-- begin sidebar branding-->
        <h3 class="ml-3">SOFIA</h3>
    </div>

    <div class="admin-sidebar-wrapper js-scrollbar fondo">
        <ul class="menu">
            <li class="menu-item">
                <router-link to="/">
                    <a href="#" class="open-dropdown menu-link">
                     <span class="menu-label"><h5 class="menu-name text-center  text-dark">Inicio</h5></span>
                     <span class="menu-icon">
                      <i class="icon-placeholder fe fe-home "></i>
                       </span>
                </a>
                </router-link>
            </li>
            <br>
            <li class="menu-item">
                <router-link to="/mapa">
                    <a href="#" class="open-dropdown menu-link">
                     <span class="menu-label"><h5 class="menu-name text-center">Mapa</h5></span>
                     <span class="menu-icon">
                      <i class="icon-placeholder fe fe-map-pin "></i>
                       </span>
                </a>
                </router-link>
            </li>
            
            <li class="menu-item">
                <router-link to="/estadistica">
                    <a  class="open-dropdown menu-link">
                     <span class="menu-label"><h5 class="menu-name text-center">Estadisticas</h5></span>
                     <span class="menu-icon">
                      <i class="icon-placeholder fe fe-bar-chart-2 "></i>
                       </span>
                </a>
                </router-link>
            </li>
        </ul>
    </div>
</aside>
<main class="admin-main">
    <!--site header begins-->
<header class="admin-header fondo">

    <nav class=" mr-auto my-auto">
        <div class="input-group mb-3">
            <input type="text" class="form-control ml-3" placeholder="Introduce tu Busqueda" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
          </div>
    </nav>
</header>
</main>
    <router-view/>
  </div>
</template>