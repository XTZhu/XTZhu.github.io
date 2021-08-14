import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * EchoServer
 */
public class EchoServer {

	public static final int ECHO_SERVER_PROT = 6789;

	public static void main(String[] args) {
		try (ServerSocket server = new ServerSocket(ECHO_SERVER_PROT)) {
			System.out.println("服务器已经启动");
			while (true) {
				Socket client = server.accept();
				new Thread(new ClientHandler(client)).start();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static class ClientHandler implements Runnable {
		private Socket client;

		public ClientHandler(Socket client) {
			this.client = client;
		}

		@Override
		public void run() {
			try(BufferedReader br = new BufferedReader(new InputStreamReader(client.getInputStream();
			PrintWriter pw = new PrintWriter(client.getOutputStream())) {
				String msg = br.readLine();
				System.out.println("copy that"+ client.getInetAddress() + "send message:" + msg);
				pw.println(msg);
				pw.flush();
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					client.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
}