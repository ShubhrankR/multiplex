import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'multiplex-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
    @ViewChild('finder__input', {static: true}) input!: ElementRef;
    @ViewChild('finder', {static: true}) finder!: ElementRef;
    @ViewChild('form', {static: true}) form!: ElementRef;

    unListenFocus!: () => void;
    unListenBlur!: () => void;
    unListenSubmit!: () => void;
    setTimeOutInterval!: any;

    searchText!: string;

    constructor(private renderer2: Renderer2) {
    }

    ngOnInit(): void {
        const inputEl = this.input.nativeElement;
        const finderEl = this.finder.nativeElement;
        const formEl = this.form.nativeElement;
        this.unListenFocus = this.renderer2.listen(inputEl, 'focus', () => {
            this.renderer2.addClass(finderEl, 'active');
        });

        this.unListenBlur = this.renderer2.listen(inputEl, 'blur', () => {
            if (inputEl.value.length === 0) {
                this.renderer2.removeClass(finderEl, 'active');
            }
        });

        this.unListenSubmit = this.renderer2.listen(formEl, 'submit', (event) => {
            event.preventDefault();
            this.renderer2.addClass(finderEl, 'processing');
            this.renderer2.removeClass(finderEl, 'active');
            inputEl.disabled = true;
            this.setTimeOutInterval = setTimeout(() => {
                this.renderer2.removeClass(finderEl, 'processing');
                inputEl.disabled = false;
                if (inputEl.value.length > 0) {
                    this.renderer2.addClass(finderEl, 'active');
                }
            }, 1000);
        });
    }

    onSubmitOfSearch() {
        console.log('onSubmitOfSearch() -- text =', this.searchText);
    }

    ngOnDestroy() {
        this.unListenBlur();
        this.unListenFocus();
        this.unListenSubmit();
        clearTimeout(this.setTimeOutInterval);
    }

}
