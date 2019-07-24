import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { GridView } from 'src/grid';

const stories = storiesOf('GridView features', module);

stories.add('simple grid - 1 frozen column', () => (
    <GridView
        columnCount={1000}
        columnWidth={100}
        freezeColumns={1}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={10}
            rowHeight={40}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));

stories.add('simple grid - 2 frozen columns', () => (
    <GridView
        columnCount={1000}
        columnWidth={100}
        freezeColumns={2}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={10}
            rowHeight={40}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));

stories.add('simple grid - rtl', () => (
    <GridView
        dir="rtl"
        columnCount={1000}
        columnWidth={100}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={10}
            rowHeight={40}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));

stories.add('variable size grid', () => (
    <GridView
        columnCount={1000}
        columnWidth={columnIndex => columnIndex > 3 ? 100 : 50}
        freezeColumns={1}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={10}
            rowHeight={rowIndex => rowIndex > 2 ? 40 : 80}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));

stories.add('non virtual grid', () => (
    <GridView
        isVirtual={false}
        columnCount={50}
        columnWidth={100}
        freezeColumns={2}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={50}
            rowHeight={40}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));

stories.add('non virtual grid - rtl', () => (
    <GridView
        isVirtual={false}
        dir={'rtl'}
        columnCount={50}
        columnWidth={100}
        freezeColumns={2}
    >

        <GridView.Head>
            {({ columnIndex }) => (
                <GridView.Cell style={{ color: 'red' }}>
                    {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Head>

        <GridView.Body
            rowCount={50}
            rowHeight={40}
        >
            {({ rowIndex, columnIndex }) => (
                <GridView.Cell style={{ color: 'blue' }}>
                    {rowIndex}, {columnIndex}
                </GridView.Cell>
            )}
        </GridView.Body>
    </GridView>
));
