import React, { useState } from 'react';
import { Container, Box, Typography, ButtonGroup, Button } from '@mui/material';

function Home() {
  const [activeContent, setActiveContent] = useState(0);

  const handleButtonClick = index => {
    setActiveContent(index);
  };

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Material-UI
        </Typography>

        {/* 네비게이션 */}
        <ButtonGroup variant="contained" sx={{ backgroundColor: 'white' }} aria-label="Basic button group">
          <Button onClick={() => handleButtonClick(0)}>Typography</Button>
          <Button onClick={() => handleButtonClick(1)}>다른 내용</Button>
        </ButtonGroup>

        {/* 콘텐츠 영역 */}
        {activeContent === 0 && (
          <Box mt={2} mb={2} p={2} bgcolor="white" borderRadius={4} boxShadow={1}>
            {/* Typography : Start */}
            <Typography variant="h5" mb={2} p={2} fontWeight="bold" bgcolor="#ddd" borderRadius={2}>
              Typography
            </Typography>
            <Box display="flex" width="100%" gap={2}>
              <Box flex="1">
                <Typography variant="h6" p={1} fontWeight="bold" bgcolor="#eee" borderRadius={2}>
                  Headings
                </Typography>
                <Typography variant="h1" mt={2} borderRadius={2} border={'1px solid #eee'}>
                  h1
                </Typography>
                <Typography variant="h2" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  h2
                </Typography>
                <Typography variant="h3" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  h3
                </Typography>
                <Typography variant="h4" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  h4
                </Typography>
                <Typography variant="h5" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  h5
                </Typography>
                <Typography variant="h6" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  h6
                </Typography>
              </Box>
              <Box flex="1">
                <Typography variant="h6" p={1} fontWeight="bold" bgcolor="#eee" borderRadius={2}>
                  Subtitles
                </Typography>
                <Typography variant="subtitle1" mt={2} borderRadius={2} border={'1px solid #eee'}>
                  subtitle1
                </Typography>
                <Typography variant="subtitle2" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  subtitle2
                </Typography>
                <br />

                <Typography variant="h6" p={1} fontWeight="bold" bgcolor="#eee" borderRadius={2}>
                  Body
                </Typography>
                <Typography variant="body1" mt={2} borderRadius={2} border={'1px solid #eee'}>
                  body1
                </Typography>
                <Typography variant="body2" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  body2
                </Typography>
                <br />

                <Typography variant="h6" p={1} fontWeight="bold" bgcolor="#eee" borderRadius={2}>
                  Etc
                </Typography>
                <Typography variant="button" display="block" mt={2} borderRadius={2} border={'1px solid #eee'}>
                  button text
                </Typography>
                <Typography variant="caption" display="block" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  caption text
                </Typography>
                <Typography variant="overline" display="block" mt={1} borderRadius={2} border={'1px solid #eee'}>
                  overline text
                </Typography>
              </Box>
            </Box>
            {/* Typography : End */}
          </Box>
        )}

        {activeContent === 1 && (
          <Box mt={2} mb={2} p={2} bgcolor="white" borderRadius={4} boxShadow={1}>
            {/* 다른 내용 : Start */}
            <Typography variant="h5" mb={2} p={2} fontWeight="bold" bgcolor="#ddd" borderRadius={2}>
              다른 내용
            </Typography>
            <Box width="100%">내용</Box>
            {/* 다른 내용 : End */}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Home;
