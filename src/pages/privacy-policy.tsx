import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy - Apex Academy Minnesota Chisago City MN"
      description="Privacy policy for Apex Academy Minnesota.org."
      showWhatSetsApart={false}
      showTestimonials={false}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Who we are
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our website address is: https://veritasclassical.org.
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        What personal data we collect and why we collect it
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Comments
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Media
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Contact forms
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Cookies
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Embedded content from other websites
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with that embedded content if you have an account and are logged in to that website.
      </Typography>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Analytics
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Who we share your data with
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        How long we retain your data
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        What rights you have over your data
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Where we send your data
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Visitor comments may be checked through an automated spam detection service.
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Your contact information
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Additional information
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        How we protect your data
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        What data breach procedures we have in place
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        What third parties we receive data from
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        What automated decision making and/or profiling we do with user data
      </Typography>
      <Typography variant="h3">Industry regulatory disclosure requirements</Typography>
    </PageShell>
  );
}
