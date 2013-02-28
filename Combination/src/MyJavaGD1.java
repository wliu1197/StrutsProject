
import org.rosuda.JRI.Rengine;

public class MyJavaGD1 {

  public static void main(String[] args) throws InterruptedException {
    Rengine re;
    String[] dummyArgs = new String[1];
    dummyArgs[0] = "--vanilla";
    re = new Rengine(dummyArgs, false, null);
    re.eval("library(JavaGD)");

    // This is the critical line: Here, we tell R that the JavaGD() device that
    // it is supposed to draw to is implemented in the class MyJavaGD. If it were
    // in a package (say, my.package), this should be set to
    // my/package/MyJavaGD1.
    re.eval("Sys.putenv('JAVAGD_CLASS_NAME'='MyJavaGD1')");

    re.eval("JavaGD()");
    re.eval("plot(c(1,5,3,8,5), type='l', col=2)");
    
    Thread.sleep(1000);
    re.end();
  }
}