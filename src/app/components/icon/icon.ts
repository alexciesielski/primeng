import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, InjectionToken, Input, Type, inject } from '@angular/core';

export interface PIconComponent {
    icon: string;
    iconStyle?: string;
}

export const P_ICON_COMPONENT = new InjectionToken<Type<PIconComponent>>('P_ICON_COMPONENT');

/**
 * Icon is a simple component to render an icon.
 * @group Components
 */
@Component({
    standalone: true,
    imports: [NgComponentOutlet],
    selector: 'p-icon',
    template: `
        @if(!iconComponentClass) {
        <i [class]="icon" [style]="iconStyle"></i>
        } @else {
        <ng-container *ngComponentOutlet="iconComponentClass; inputs: { icon: icon, iconStyle: iconStyle }" />
        }
    `,
    styleUrls: ['./icon.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-element'
    }
})
export class Icon implements PIconComponent {
    @Input({ required: true }) icon: string;
    @Input() iconStyle?: string;

    protected readonly iconComponentClass = inject(P_ICON_COMPONENT, { optional: true });
}
