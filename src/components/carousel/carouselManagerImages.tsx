import React, { ReactElement } from 'react';

import { Box, Flex } from '@/styles/flex';
import { BgImage } from '@/styles/image';

export function CarouselManagerImages({ image = [], numberOfImages = 1 }): ReactElement {
    switch (numberOfImages) {
        case 1:
            return (
                <Box flex="1 1 auto">
                    <BgImage src={image[0]} />
                </Box>
            );

        case 2:
            return (
                <>
                    <Box flex="1 1 auto">
                        <BgImage src={image[0]} />
                    </Box>

                    <Box flex="1 1 auto">
                        <BgImage src={image[1]} />
                    </Box>
                </>
            );

        case 3:
            return (
                <>
                    <Box flex="1 1 auto">
                        <BgImage src={image[0]} />
                    </Box>

                    <Box flex="1 1 auto">
                        <Flex flex="1 1 auto" flexDirection="column">
                            <Box flex="1 1 auto">
                                <BgImage src={image[1]} />
                            </Box>

                            <Box flex="1 1 auto">
                                <BgImage src={image[2]} />
                            </Box>
                        </Flex>
                    </Box>
                </>
            );

        default:
            return (
                <>
                    <Flex flex="1 1 auto" flexDirection="column">
                        <Box flex="1 1 auto">
                            <BgImage src={image[0]} />
                        </Box>

                        <Box flex="1 1 auto">
                            <BgImage src={image[1]} />
                        </Box>
                    </Flex>

                    <Flex flex="1 1 auto" flexDirection="column">
                        <Box flex="1 1 auto">
                            <BgImage src={image[2]} />
                        </Box>

                        <Box flex="1 1 auto">
                            <BgImage src={image[3]} />
                        </Box>
                    </Flex>
                </>
            );
    }
}
