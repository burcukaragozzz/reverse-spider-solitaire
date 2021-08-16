import { CSSProperties, FC } from 'react';
import { XYCoord, useDragLayer, useDragDropManager } from 'react-dnd';

import { Card } from 'components';

const BoxDragPreview = () => {
    const dragDropManager = useDragDropManager();

    const movingCards = dragDropManager.getMonitor().getItem();

    return (
        <div
            style={{
                position: 'relative',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'yellow',
                boxShadow: 'unset',
                height: '100',
            }}
        >
            {movingCards.length
                ? movingCards.map((card, index) => (
                      <div
                          key={`moving-${index}`}
                          style={{
                              position: 'relative',
                              zIndex: index + 1,
                          }}
                      >
                          <Card id={card.id} card={card} isDown={card.isDown} isSelected={false} />
                      </div>
                  ))
                : null}
        </div>
    );
};

const layerStyles: CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 999,
    left: 0,
    top: 0,
    width: '100%',
    height: '100',
};

function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }

    const { x, y } = currentOffset;

    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}

export const CustomDragLayer: FC = (props) => {
    const { isDragging, initialOffset, currentOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));

    if (!isDragging) return null;

    return (
        <div style={layerStyles}>
            <div
                style={{
                    position: 'fixed',
                    zIndex: 9999,
                    ...getItemStyles(initialOffset, currentOffset),
                }}
            >
                <BoxDragPreview />
            </div>
        </div>
    );
};
