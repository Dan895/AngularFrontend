import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: "full", },
    { path: 'dashboard', component: DashboardComponent, },
    { path: 'products', component: ProductsComponent, },
    { path: 'statistics', component: StatisticsComponent, },
    { path: 'coupens', component: CoupensComponent, },
    { path: 'pages', component: PagesComponent, },
    { path: 'media', component: MediaComponent, },
    { path: 'settings', component: SettingsComponent, },

];
