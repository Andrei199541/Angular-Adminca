import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { DashboardEcommerceComponent } from './pages/dashboard-ecommerce/dashboard-ecommerce.component';
import { DashboardBlogComponent } from './pages/dashboard-blog/dashboard-blog.component';
import { Dashboard4Component } from './pages/dashboard-4/dashboard-4.component';
import { Dashboard5Component } from './pages/dashboard-5/dashboard-5.component';
import { Dashboard6Component } from './pages/dashboard-6/dashboard-6.component';
import { Dashboard7Component } from './pages/dashboard-7/dashboard-7.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsLineComponent } from './pages/ui/tabs-line/tabs-line.component';
import { TabsPillComponent } from './pages/ui/tabs-pill/tabs-pill.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { ToastrComponent } from './pages/ui/toastr/toastr.component';
import { TooltipComponent } from './pages/ui/tooltip/tooltip.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IdleTimerComponent } from './pages/ui/idle-timer/idle-timer.component';
import { ClipboardComponent } from './pages/ui/clipboard/clipboard.component';

import { ButtonDefaultComponent } from './pages/ui/buttons/button-default/button-default.component';
import { ButtonRoundedComponent } from './pages/ui/buttons/button-rounded/button-rounded.component';
import { ButtonSquareComponent } from './pages/ui/buttons/button-square/button-square.component';
import { ButtonAirComponent } from './pages/ui/buttons/button-air/button-air.component';
import { ButtonIconComponent } from './pages/ui/buttons/button-icon/button-icon.component';
import { ButtonLabeledComponent } from './pages/ui/buttons/button-labeled/button-labeled.component';
import { ButtonAnimatedComponent } from './pages/ui/buttons/button-animated/button-animated.component';
import { ButtonFabComponent } from './pages/ui/buttons/button-fab/button-fab.component';
import { ButtonGroupsComponent } from './pages/ui/buttons/button-groups/button-groups.component';
import { ButtonDropdownsComponent } from './pages/ui/buttons/button-dropdowns/button-dropdowns.component';
import { ButtonSocialComponent } from './pages/ui/buttons/button-social/button-social.component';

import { WidgetsStatisticsComponent } from './pages/widgets-statistics/widgets-statistics.component';
import { WidgetsListComponent } from './pages/widgets-list/widgets-list.component';
import { WidgetsUserComponent } from './pages/widgets-user/widgets-user.component';
import { WidgetsBlogComponent } from './pages/widgets-blog/widgets-blog.component';

import { InputsComponent } from './pages/forms/inputs/inputs.component';
import { SwitchComponent } from './pages/forms/switch/switch.component';
import { CheckboxRadioComponent } from './pages/forms/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './pages/forms/input-groups/input-groups.component';
import { FormLayoutsComponent } from './pages/forms/form-layouts/form-layouts.component';
import { InputMasksComponent } from './pages/forms/input-masks/input-masks.component';
import { FormValidationComponent } from './pages/forms/form-validation/form-validation.component';
import { TextEditorsComponent } from './pages/forms/text-editors/text-editors.component';
import { FormAdvancedComponent } from './pages/forms/form-advanced/form-advanced.component';
import { AutocompleteComponent } from './pages/forms/autocomplete/autocomplete.component';
import { WizardComponent } from './pages/forms/wizard/wizard.component';

import { TablesComponent } from './pages/tables/tables.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';

import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { MorrisChartComponent } from './pages/charts/morris-chart/morris-chart.component';
import { PeityChartComponent } from './pages/charts/peity-chart/peity-chart.component';
import { SparklineChartComponent } from './pages/charts/sparkline-chart/sparkline-chart.component';

import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';

import { IconsComponent } from './pages/ui/icons/icons.component';

import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ProductsListComponent } from './pages/ecommerce/products-list/products-list.component';
import { AddProductComponent } from './pages/ecommerce/add-product/add-product.component';
import { OrdersListComponent } from './pages/ecommerce/orders-list/orders-list.component';
import { OrderDetailsComponent } from './pages/ecommerce/order-details/order-details.component';
import { InvoiceComponent } from './pages/ecommerce/invoice/invoice.component';
import { CustomersComponent } from './pages/ecommerce/customers/customers.component';

import { FaqComponent } from './pages/faq/faq.component';
import { SearchComponent } from './pages/search/search.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { PricingTable1Component } from './pages/pricing-table-1/pricing-table-1.component';
import { PricingTable2Component } from './pages/pricing-table-2/pricing-table-2.component';
import { PricingTable3Component } from './pages/pricing-table-3/pricing-table-3.component';
import { PricingTable4Component } from './pages/pricing-table-4/pricing-table-4.component';
import { PricingTable5Component } from './pages/pricing-table-5/pricing-table-5.component';
import { PricingTable6Component } from './pages/pricing-table-6/pricing-table-6.component';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login-2/login-2.component';
import { Login3Component } from './pages/login-3/login-3.component';
import { Login4Component } from './pages/login-4/login-4.component';
import { Login5Component } from './pages/login-5/login-5.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error4042Component } from './pages/error-404-2/error-404-2.component';
import { Error403Component } from './pages/error-403/error-403.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "dashboard_ecommerce",
                component: DashboardEcommerceComponent
            },
            {
                path: "dashboard_blog",
                component: DashboardBlogComponent
            },
            {
                path: "dashboard_4",
                component: Dashboard4Component
            },
            {
                path: "dashboard_5",
                component: Dashboard5Component
            },
            {
                path: "dashboard_6",
                component: Dashboard6Component
            },
            {
                path: "dashboard_7",
                component: Dashboard7Component
            },
            {
                path: "ui/colors",
                component: ColorsComponent
            },
            {
                path: "ui/typography",
                component: TypographyComponent
            },
            {
                path: "ui/panels",
                component: PanelsComponent
            },
            {
                path: "ui/tabs-pill",
                component: TabsPillComponent
            },
            {
                path: "ui/tabs-line",
                component: TabsLineComponent
            },
            {
                path: "ui/alerts",
                component: AlertsComponent
            },
            {
                path: "ui/toastr",
                component: ToastrComponent
            },
            {
                path: "ui/tooltip_popover",
                component: TooltipComponent
            },
            {
                path: "ui/badges_progress",
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",
                component: ListComponent
            },
            {
                path: "ui/clipboard",
                component: ClipboardComponent
            },
            {
                path: "ui/idle-timer",
                component: IdleTimerComponent
            },
            {
                path: "ui/icons",
                component: IconsComponent
            },
            {
                path: "buttons/buttons-default",
                component: ButtonDefaultComponent
            },
            {
                path: "buttons/buttons-rounded",
                component: ButtonRoundedComponent
            },
            {
                path: "buttons/buttons-square",
                component: ButtonSquareComponent
            },
            {
                path: "buttons/buttons-air",
                component: ButtonAirComponent
            },
            {
                path: "buttons/button-icon",
                component: ButtonIconComponent
            },
            {
                path: "buttons/button-labeled",
                component: ButtonLabeledComponent
            },
            {
                path: "buttons/button-animated",
                component: ButtonAnimatedComponent
            },
            {
                path: "buttons/buttons-fab",
                component: ButtonFabComponent
            },
            {
                path: "buttons/button-groups",
                component: ButtonGroupsComponent
            },
            {
                path: "buttons/button-dropdowns",
                component: ButtonDropdownsComponent
            },
            {
                path: "buttons/buttons-social",
                component: ButtonSocialComponent
            },
            {
                path: "widgets/statistics",
                component: WidgetsStatisticsComponent
            },
            {
                path: "widgets/list",
                component: WidgetsListComponent
            },
            {
                path: "widgets/user",
                component: WidgetsUserComponent
            },
            {
                path: "widgets/blog",
                component: WidgetsBlogComponent
            },
            {
                path: "forms/form-controls/inputs",
                component: InputsComponent
            },
            {
                path: "forms/form-controls/switch",
                component: SwitchComponent
            },
            {
                path: "forms/form-controls/checkbox-radio",
                component: CheckboxRadioComponent
            },
            {
                path: "forms/form-controls/input-groups",
                component: InputGroupsComponent
            },
            {
                path: "forms/form_layouts",
                component: FormLayoutsComponent
            },
            {
                path: "forms/form_advanced",
                component: FormAdvancedComponent
            },
            {
                path: "forms/form_masks",
                component: InputMasksComponent
            },
            {
                path: "forms/form_validation",
                component: FormValidationComponent
            },
            {
                path: "forms/text_editors",
                component: TextEditorsComponent
            },
            {
                path: "forms/autocomplete",
                component: AutocompleteComponent
            },
            {
                path: "tables/basic",
                component: TablesComponent
            },
            {
                path: "tables/datatables",
                component: DatatablesComponent
            },
            {
                path: "charts/chartjs",
                component: ChartjsComponent
            },
            {
                path: "charts/charts_morris",
                component: MorrisChartComponent
            },
            {
                path: "charts/charts_peity",
                component: PeityChartComponent
            },
            {
                path: "charts/charts_sparkline",
                component: SparklineChartComponent
            },
            {
                path: "maps_vector",
                component: MapsVectorComponent
            },
            {
                path: "mailbox",
                component: MailboxComponent
            },
            {
                path: "blog/blog_list",
                component: BlogListComponent
            },
            {
                path: "blog/article",
                component: ArticleComponent
            },
            {
                path: "calendar",
                component: CalendarComponent
            },
            {
                path: "ecommerce/dashboard",
                component: DashboardEcommerceComponent
            },
            {
                path: "ecommerce/products_list",
                component: ProductsListComponent
            },
            {
                path: "ecommerce/add_product",
                component: AddProductComponent
            },
            {
                path: "ecommerce/orders_list",
                component: OrdersListComponent
            },
            {
                path: "ecommerce/order_details",
                component: OrderDetailsComponent
            },
            {
                path: "ecommerce/invoice",
                component: InvoiceComponent
            },
            {
                path: "ecommerce/customers",
                component: CustomersComponent
            },            
            {
                "path": "faq",
                "component": FaqComponent
            },
            {
                "path": "search",
                "component": SearchComponent
            },
            {
                "path": "timeline",
                "component": TimelineComponent
            },
            {
                "path": "pricing-table-1",
                "component": PricingTable1Component
            },
            {
                "path": "pricing-table-2",
                "component": PricingTable2Component
            },
            {
                "path": "pricing-table-3",
                "component": PricingTable3Component
            },
            {
                "path": "pricing-table-4",
                "component": PricingTable4Component
            },
            {
                "path": "pricing-table-5",
                "component": PricingTable5Component
            },
            {
                "path": "pricing-table-6",
                "component": PricingTable6Component
            },
            {
                path: "profile",
                component: ProfileComponent
            },
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "login-2",
        "component": Login2Component
    },
    {
        "path": "login-3",
        "component": Login3Component
    },
    {
        "path": "login-4",
        "component": Login4Component
    },
    {
        "path": "login-5",
        "component": Login5Component
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_404-2",
        "component": Error4042Component
    },
    {
        "path": "error_403",
        "component": Error403Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "maintenance",
        "component": MaintenanceComponent
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    DashboardEcommerceComponent,
    DashboardBlogComponent,
    Dashboard4Component,
    Dashboard5Component,
    Dashboard6Component,
    Dashboard7Component,
    ColorsComponent,
    TypographyComponent,
    PanelsComponent,
    TabsLineComponent,
    TabsPillComponent,
    AlertsComponent,
    ToastrComponent,
    TooltipComponent,
    BadgesProgressComponent,
    ListComponent,
    IdleTimerComponent,
    ClipboardComponent,
    ButtonDefaultComponent,
    ButtonRoundedComponent,
    ButtonSquareComponent,
    ButtonAirComponent,
    ButtonIconComponent,
    ButtonLabeledComponent,
    ButtonAnimatedComponent,
    ButtonFabComponent,
    ButtonGroupsComponent,
    ButtonDropdownsComponent,
    ButtonSocialComponent,
    WidgetsStatisticsComponent,
    WidgetsListComponent,
    WidgetsUserComponent,
    WidgetsBlogComponent,
    InputsComponent,
    SwitchComponent,
    CheckboxRadioComponent,
    InputGroupsComponent,
    FormLayoutsComponent,
    InputMasksComponent,
    FormValidationComponent,
    TextEditorsComponent,
    FormAdvancedComponent,
    AutocompleteComponent,
    WizardComponent,
    TablesComponent,
    DatatablesComponent,
    ChartjsComponent,
    MorrisChartComponent,
    PeityChartComponent,
    SparklineChartComponent,
    MapsVectorComponent,
    IconsComponent,
    MailboxComponent,
    BlogListComponent,
    ArticleComponent,
    CalendarComponent,
    ProductsListComponent,
    AddProductComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    InvoiceComponent,
    CustomersComponent,
    FaqComponent,
    SearchComponent,
    TimelineComponent,
    PricingTable1Component,
    PricingTable2Component,
    PricingTable3Component,
    PricingTable4Component,
    PricingTable5Component,
    PricingTable6Component,
    LoginComponent,
    Login2Component,
    Login3Component,
    Login4Component,
    Login5Component,
    LockscreenComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    Error404Component,
    Error4042Component,
    Error403Component,
    Error500Component,
    MaintenanceComponent,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
