import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Image from 'next/image';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  const router = useRouter();

  const classes = useStyles();
  return (
    <Box>
      <Image
        width={500}
        height={300}
        alt={item?.title}
        src={item?.thumb}
        layout="intrinsic"
        className={classes.img}
        onClick={() =>
          router.push({
            pathname: '/video/[id]',
            query: { id: item?._id },
          })
        }
      />
      <Box display="flex" mt="1">
        <Box mr={2}>
          <Avatar alt={item?.autorName} src={item?.autorAvatar}>
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item?.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item?.autorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item?.views} • ${dayjs(item?.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;
