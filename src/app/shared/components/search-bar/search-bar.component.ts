import { Component, ElementRef, OnDestroy, OnInit, output, Renderer2, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'multiplex-search-bar',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
    @ViewChild('finder__input', { static: true }) input!: ElementRef;
    @ViewChild('finder', { static: true }) finder!: ElementRef;
    @ViewChild('form', { static: true }) form!: ElementRef;

    /**
     * Angular Signal Output: Clean type-safe event output primitive.
     * Emits search query events to listening parent components.
     */
    readonly outputtingSearchKeyword = output<string>();

    /**
     * Angular Signal: Reactive local state holding the current search input text.
     */
    readonly searchText = signal<string>('');

    private unListenFocus!: () => void;
    private unListenBlur!: () => void;
    private unListenSubmit!: () => void;
    private setTimeOutInterval!: any;

    constructor(private renderer2: Renderer2) {}

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

    onSubmitOfSearch(): void {
        this.outputtingSearchKeyword.emit(this.searchText());
    }

    onSearchEvent(inputVal: string): void {
        if (inputVal === '') {
            this.outputtingSearchKeyword.emit('');
        }
    }

    ngOnDestroy(): void {
        if (this.unListenBlur) this.unListenBlur();
        if (this.unListenFocus) this.unListenFocus();
        if (this.unListenSubmit) this.unListenSubmit();
        if (this.setTimeOutInterval) clearTimeout(this.setTimeOutInterval);
    }
}
