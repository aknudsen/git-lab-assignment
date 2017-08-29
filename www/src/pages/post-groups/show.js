import {inject, bindable, bindingMode} from "aurelia-framework";
import {PostGroupService, MessageService, NavigationService} from "../../services/index";
import {PagedContentResolver} from "../../resources/templates/paged-content/paged-content-resolver"
import {PagedContentMemory} from "../../resources/templates/paged-content/paged-content-memory"
import {FilterContentResolver} from "../../resources/templates/filter-content/filter-content-resolver"
import {FilterContentMemory} from "../../resources/templates/filter-content/filter-content-memory"
import {AccordionService} from "../../services/accordion-service"
import {Router} from "aurelia-router";

@inject(PostGroupService, Router, MessageService, NavigationService, PagedContentResolver.of(PagedContentMemory), FilterContentResolver.of(FilterContentMemory), AccordionService)
export class PostGroupsShow {

    @bindable postGroup
    @bindable({defaultBindingMode: bindingMode.twoWay}) filteredPosts = []
    pagedContentMemory
    accordionService
    filterContentMemory

    constructor(postGroupService, router, messageService, navigationService, pagedContentResolver, filterContentResolver, accordionService) {
import {inject} from "aurelia-framework";
import {PostGroupService, MessageService, NavigationService} from "../../services/index";
import {PagedContentResolver} from "../../resources/templates/paged-content-resolver"
import {PagedContentMemory} from "../../resources/templates/paged-content-memory"
import {Router} from "aurelia-router";

@inject(PostGroupService, Router, MessageService, NavigationService, PagedContentResolver.of(PagedContentMemory))
export class PostGroupsShow {

    pagedContentMemory

    constructor(postGroupService, router, messageService, navigationService, pagedContentResolver) {
        this.postGroupService = postGroupService
        this.router = router
        this.messageService = messageService
        this.navigationService = navigationService
        this.accordionService = accordionService
        this.pagedContentResolver = pagedContentResolver
        this.filterContentResolver = filterContentResolver
    }

    attached() {
        this.accordionService.setup()
        this.pagedContentResolver = pagedContentResolver
    }

    activate(params) {
        if (!params.id) {
            this.messageService.error("Internal Application Error", true)
            this.router.navigateBack()
            return
        }

        this.postGroupService.findOne(params.id).promise.then((res) => {
            this.postGroup = res

            if(this.postGroup.postGroups.length === 0) {
                this.pagedContentMemory = this.pagedContentResolver({'id': params.id})
                // this.pagedContentMemory.setPage((params.page) ? parseInt(params.page) - 1 : 0)
                this.pagedContentMemory.setPage(0)
            }

            this.filteredPosts = this.postGroup.publishedPosts
            this.pagedContentMemory = this.pagedContentResolver({ 'id': params.id })
            this.pagedContentMemory.setPage((params.page) ? parseInt(params.page) - 1 : 0)
        }, (err) => {
            this.messageService.error("Post Group not found", true)
            this.router.navigateBack()
        })
    }
}
