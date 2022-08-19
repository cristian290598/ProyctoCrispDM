
import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'LOGIN', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/auth-view/signin', title: 'INICIAR SESIÓN', icon: 'icon-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/auth-view/register-user', title: ' REGISTRAR USUARIO', icon: 'icon-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/auth-view/forgot-password', title: 'RESTABLECER CONTRASEÑA', icon: 'ft-edit-1', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },


  {
    path: '', title: 'USERS VIEW', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/user-view/company-page', title: 'CREAR EMPRESA', icon: 'ft-airplay', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/user-view/admin-view', title: ' ADMINISTRADOR', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/user-view/developer-view', title: ' DESARROLLADOR', icon: 'ft-aperture', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/user-view/scrum-view', title: ' SCRUM VIEW', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'COMPANY', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/company-data/create-company', title: 'CREATE COMPANY ', icon: 'ft-plus-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/company-data/create-methodology', title: 'CREATE METHODOLOGY', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/company-data/create-proyect', title: 'CREATE PROYECT', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },

];
