import { Directive, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-directive',
  imports: [],
  templateUrl: './lifecycle-directive.component.html',
  styleUrl: './lifecycle-directive.component.css'
})
export class LifecycleDirectiveComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(private el: ElementRef, private renderer: Renderer2) {
      console.log('Constructor: Directive created');
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges: Input properties changed', changes);
    }
  
    ngOnInit(): void {
      console.log('ngOnInit: Directive initialized');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    }
  
    ngDoCheck(): void {
      console.log('ngDoCheck: Change detection cycle executed');
    }
  
    ngAfterContentInit(): void {
      console.log('ngAfterContentInit: Content initialized');
    }
  
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked: Content checked');
    }
  
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit: View initialized');
    }
  
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked: View checked');
    }
  
    ngOnDestroy(): void {
      console.log('ngOnDestroy: Directive about to be destroyed');
    }
  }
  

