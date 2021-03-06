declare module '@emotion/styled' {

    // re-export original typings
    export * from '@emotion/styled/types/index';

    // declare theme type
    export interface _Theme {
        dir: 'rtl' | 'ltr';
        defaultTheme: boolean;
    }
    export type Theme = Readonly<_Theme>;

    // override the 'styled' default export
    import { CreateStyled } from '@emotion/styled/types/index';
    const styledWithTheme: CreateStyled<Theme>;
    export default styledWithTheme;
}