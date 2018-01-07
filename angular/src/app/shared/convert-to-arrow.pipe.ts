import { Pipe, PipeTransform } from '@angular/core';

// Pipe decorator.
@Pipe({
    // Name that we will be using to reference in the html file.
    name: 'convertToArrow'
})

export class ConvertToArrowPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, '→';
    }

}
